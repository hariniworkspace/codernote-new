import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import CoderNotes from "./pages/CoderNotes";
import CoderNoteDetail from "./pages/CoderNoteDetail";
import Profile from "./pages/Profile";

import Aptitude from "./pages/Aptitude";
import AptitudeNoteDetail from "./pages/AptitudeNoteDetail";

import SystemDesign from "./pages/SystemDesign";
import SystemDesignDetail from "./pages/SystemDesignDetail";

import Oops from "./pages/Oops";
import OopsDetail from "./pages/OopsDetail";

import Cn from "./pages/Cn";
import CnDetail from "./pages/CnDetail";

import Dbms from "./pages/Dbms";
import DbmsDetail from "./pages/DbmsDetail";

import RegistrationLoadingScreen from "./pages/RegistrationLoadingScreen";
import SuccessScreen from "./pages/SuccessScreen";
import AppLoadingScreen from "./pages/AppLoadingScreen"; // ✅ NEW

import TopLoader from "./components/TopLoader";
import PublicRoute from "./components/PublicRoute";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {

 

  // ✅ Normal app after loading
  return (
    <>
      <TopLoader />

      <Routes>

        {/* Success */}
        <Route path="/success" element={<SuccessScreen />} />

        {/* Registration loading */}
        <Route
          path="/register-loading"
          element={<RegistrationLoadingScreen />}
        />

        {/* Public routes */}
        <Route
          path="/"
          element={
            <PublicRoute>
              <Landing />
            </PublicRoute>
          }
        />

        <Route
          path="/login"
          element={
            <PublicRoute>
              <Login />
            </PublicRoute>
          }
        />

        <Route
          path="/register"
          element={
            <PublicRoute>
              <Register />
            </PublicRoute>
          }
        />

        {/* Protected routes */}

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/notes"
          element={
            <ProtectedRoute>
              <CoderNotes />
            </ProtectedRoute>
          }
        />

        <Route
          path="/codernotes/:id"
          element={
            <ProtectedRoute>
              <CoderNoteDetail />
            </ProtectedRoute>
          }
        />

        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Aptitude */}
        <Route
          path="/aptitude"
          element={
            <ProtectedRoute>
              <Aptitude />
            </ProtectedRoute>
          }
        />

        <Route
          path="/aptitude/:id"
          element={
            <ProtectedRoute>
              <AptitudeNoteDetail />
            </ProtectedRoute>
          }
        />

        {/* System Design */}
        <Route
          path="/system-design"
          element={
            <ProtectedRoute>
              <SystemDesign />
            </ProtectedRoute>
          }
        />

        <Route
          path="/system-design/:id"
          element={
            <ProtectedRoute>
              <SystemDesignDetail />
            </ProtectedRoute>
          }
        />

        {/* OOPS */}
        <Route
          path="/oops"
          element={
            <ProtectedRoute>
              <Oops />
            </ProtectedRoute>
          }
        />

        <Route
          path="/oops/:id"
          element={
            <ProtectedRoute>
              <OopsDetail />
            </ProtectedRoute>
          }
        />

        {/* CN */}
        <Route
          path="/cn"
          element={
            <ProtectedRoute>
              <Cn />
            </ProtectedRoute>
          }
        />

        <Route
          path="/cn/:id"
          element={
            <ProtectedRoute>
              <CnDetail />
            </ProtectedRoute>
          }
        />

        {/* DBMS */}
        <Route
          path="/dbms"
          element={
            <ProtectedRoute>
              <Dbms />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dbms/:id"
          element={
            <ProtectedRoute>
              <DbmsDetail />
            </ProtectedRoute>
          }
        />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </>
  );
};

export default App;
