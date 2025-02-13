import React, { useEffect, useRef } from 'react';
import Navbar from '../common/navbar/navbar';
import Fab from '@mui/material/Fab';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PauseIcon from '@mui/icons-material/Pause';
import StopCircleIcon from '@mui/icons-material/StopCircle';
import { useRecorder } from "voice-recorder-react";
import Button from '@mui/material/Button';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import { saveAs } from 'file-saver';

const Home = () => {
  const { data, stop, start, pause, resume, recording, paused } = useRecorder();
  const audioRef = useRef(null);

  useEffect(() => {
    if (data.url && audioRef.current) {
      audioRef.current.src = data.url;
    }
  }, [data.url]);

  const togglePlay = () => {
    if (audioRef.current) {
      audioRef.current.paused ? audioRef.current.play() : audioRef.current.pause();
    }
  };

  const handleRecording = () => {
    if (recording) {
      pause();
    } else if (paused) {
      resume();
    } else {
      start();
    }
  };

  const handleSave = () => {
    const audioBlob = new Blob([data.blob], { type: 'audio/mp3' });
    saveAs(audioBlob, 'recording.mp3');
  };


  return (
    <div className='home-container'>
      <Navbar />
      <div>
        {/* Start/Pause/Resume Button */}
        <Fab
          color="primary"
          aria-label="record"
          size='large'
          sx={{ bottom: 16, right: 16, position: 'absolute' }}
          onClick={handleRecording}
        >
          {recording ? <PauseIcon /> : <PlayCircleOutlineIcon />}
        </Fab>

        {/* Stop Button */}
        {recording && (
          <Fab
            color="primary"
            aria-label="stop"
            size='large'
            sx={{ bottom: 86, right: 16, position: 'absolute' }}
            onClick={stop}
          >
            <StopCircleIcon />
          </Fab>
        )}

        {/* Play/Pause Audio Button */}
        {!recording && data.url && (
          <>
            <Button variant="contained" endIcon={<VolumeUpIcon />} onClick={togglePlay}
              style={{ bottom: 125, right: 16, position: 'absolute', width: 150 }}>
              Play/Pause
            </Button>
            <Button variant="contained" onClick={handleSave} style={{ bottom: 125, right: 189, position: 'absolute', width: 150 }}>Save Audio </Button>
          </>
        )}
      </div>
      <audio ref={audioRef} hidden />
    </div>
  );
};

export default Home;