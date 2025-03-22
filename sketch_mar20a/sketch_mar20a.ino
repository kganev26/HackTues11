#include <ESP8266WiFi.h>
#include <ESP8266HTTPClient.h>
#include <SPI.h>
#include <MFRC522.h>

# define SS_PIN D8
#define RST_PIN D3
MFRC522 mfrc522(SS_PIN, RST_PIN);

const char* ssid = "P'sA05s";
const char* password = "QWERTYUI";
const char* serverURL = "http://192.168.248.104:5500/cardnum";  

void setup() {
    Serial.begin(115200);
    SPI.begin();
    mfrc522.PCD_Init();
    WiFi.begin(ssid, password);
    while (WiFi.status() != WL_CONNECTED) {
        delay(500);
    }
}

void loop() {
    if (!mfrc522.PICC_IsNewCardPresent() || !mfrc522.PICC_ReadCardSerial()) {
        return;
    }
    String uidString = "";
    for (byte i = 0; i < mfrc522.uid.size; i++) {
        uidString += String(mfrc522.uid.uidByte[i]);
    }
    sendUIDToServer(uidString);
  delay(5000);
}

void sendUIDToServer(String uid) {
    if (WiFi.status() == WL_CONNECTED) {
        WiFiClient client;
        HTTPClient http;
        http.begin(client, serverURL);
        http.addHeader("Content-Type", "application/json");
        String jsonPayload = "{\"uid\":\"" + uid + "\"}";
        int httpResponseCode = http.POST(jsonPayload);
        Serial.print(jsonPayload);
        if (httpResponseCode > 0) {
            String response = http.getString();
            Serial.println(response);
        } else {
            Serial.print("Error");
        }
        http.end();
    } else {
        WiFi.begin(ssid, password);
    }
}