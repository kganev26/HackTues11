import React, { useState } from "react";
import { create } from "zustand";
import Chat from "./Chat";
import './App.css';

const App = () => {
  return (
    <div>
      <Chat />
    </div>
  );
}