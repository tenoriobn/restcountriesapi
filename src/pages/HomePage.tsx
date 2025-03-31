import CountryCard from "../components/CountryCard";
import ControlPanel from "../components/ControlPanel";
import { Profiler } from "react";

export default function HomePage() {
  function onRender(
    id: string, 
    phase: string, 
    actualDuration: number, 
    baseDuration: number, 
    startTime: number, 
    commitTime: number
  ) {
    console.log({ id, phase, actualDuration, baseDuration, startTime, commitTime });
  }

  return (
    <>
      <Profiler id='homepage' onRender={onRender}>
        <ControlPanel />
        <CountryCard />
      </Profiler>
    </>
  );
}
