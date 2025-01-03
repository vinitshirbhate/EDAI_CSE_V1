import { Routes, Route } from "react-router-dom";
import "./App.css";
import "stream-chat-react/dist/css/v2/index.css";
import VolunteerScreen from "./Components/Volunteer/VolunteerScreen";
import RequestHelp from "./Components/Victim/RequestHelp";
import { RequestProvider } from "./Contexts/RequestContext";
import VictimRegister from "./Components/Victim/VictimRegister";
import VictimLogin from "./Components/Victim/VictimLogin";
import AllRequests from "./Components/Victim/AllRequests";
import VolunteerRegister from "./Components/Volunteer/VolunteerRegister";
import VolunteerLogin from "./Components/Volunteer/VolunteerLogin";
import Home from "./Components/Home/Home";
import History from "./Components/Volunteer/History";
import ChatPage from "./Components/Chat/ChatPage";
import VolunteerChat from "./Components/Chat/VolunteerChat";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<Home />} path="/" />

        <Route element={<VictimRegister />} path="/victim-register" />
        <Route element={<VictimLogin />} path="/victim-login" />
        <Route element={<VolunteerScreen />} path="/volunteer" />
        <Route element={<History />} path="/history" />
        <Route element={<AllRequests />} path="/victim-requests" />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/chat-volunteer" element={<VolunteerChat />} />
        {/* volunteer register */}

        <Route element={<VolunteerRegister />} path="/volunteer-register" />
        <Route element={<VolunteerLogin />} path="/volunteer-login" />

        <Route
          element={
            <RequestProvider>
              <RequestHelp />
            </RequestProvider>
          }
          path="/victim-help"
        />
      </Routes>
    </div>
  );
}

export default App;
