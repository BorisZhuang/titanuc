import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import CallEndIcon from '@material-ui/icons/CallEnd'
import Slide from '@material-ui/core/Slide';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import CardMedia from '@material-ui/core/CardMedia';

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  title: {
    marginLeft: theme.spacing(2),
    flex: 1,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  preview: {
    width: 151,
    height: 151
  },
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function VideoCall({
  openVideo,
  callAccepted,
  userVideo,
  partnerVideo,
  onEndCall }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [videoInput, setVideoInput] = React.useState('');
  const [audioInput, setAudioInput] = React.useState('');
  const [audioOutput, setAudioOutput] = React.useState('');
  const [videoInputs, setVideoInputs] = React.useState([]);
  const [audioInputs, setAudioInputs] = React.useState([]);
  const [audioOutputs, setAudioOutputs] = React.useState([]);
  const [callingFriend, setCallingFriend] = React.useState(false);

  console.log('VideoCall is called.')

  React.useEffect(() => {
    setOpen(openVideo);
  }, [openVideo, callAccepted]);

/*   const endCall = () => {
    onEndCall()
  } */

  let UserVideo;
  if (userVideo.current) {
    UserVideo = (
      <video className="userVideo" playsInline muted ref={userVideo} autoPlay />
    );
  }

  let PartnerVideo;
  if (callAccepted) {
    PartnerVideo = (
      <video className="partnerVideo cover" playsInline ref={partnerVideo} autoPlay />
    );
  }

  let hangUp = <IconButton color="secondary" aria-label="end call" onClick={onEndCall}>
    <CallEndIcon />
  </IconButton>

  const getMediaDevices = () => {
    let videoInputs = [];
    let audioInputs = [];
    let audioOutputs = [];

    navigator.mediaDevices.enumerateDevices().then(deviceInfos => {
      deviceInfos.forEach((deviceinfo) => {
        if(deviceinfo.kind === 'audioinput'){
          audioInputs.push(deviceinfo);
        }else if(deviceinfo.kind === 'audiooutput'){
          audioOutputs.push(deviceinfo);
        }else if(deviceinfo.kind === 'videoinput'){
          videoInputs.push(deviceinfo);
        }
      });
      setVideoInputs(videoInputs);
      setAudioInputs(audioInputs);
      setAudioOutputs(audioOutputs);
    });
  }

  const handleError = err => {
    console.log('getUserMedia error:', err);
  }

/* 	if (!navigator.mediaDevices ||
		!navigator.mediaDevices.getUserMedia) {
		console.log('getUserMedia is not supported!');
	} else {
		var constraints = {
			video : true,
			audio : true
		}
		navigator.mediaDevices.getUserMedia(constraints)
			.then(getMediaDevices)
			.catch(handleError);
	} */

  const handleVideoInputChange = (event) => {
    setVideoInput(event.target.value);
    var constraints = {
/* 			video : {
				width: 640,
				height: 480,
				frameRate:15,
				facingMode: 'enviroment',
				deviceId : videoInput
			}, */
      video: true,
			audio : true
		}
		navigator.mediaDevices.getUserMedia(constraints)
      //.then(getMediaStream)
      .catch(handleError);
  }

  const handleAudioInputChange = (event) => {
    setAudioInput(event.target.value);
  }

  const handleAudioOutputChange = (event) => {
    setAudioOutput(event.target.value);
  }

  return (
    <div>
      <Dialog fullScreen open={open} TransitionComponent={Transition}>
        <div className="callContainer">
          <div className="partnerVideoContainer">
            {PartnerVideo}
          </div>
          <div className="userVideoContainer">
            {UserVideo}
          </div>
        </div>
        <div className="controlsContainer flex">
          {hangUp}
        </div>
{/*         <FormControl className={classes.formControl}>
          <InputLabel id="video-input-label">Video Input</InputLabel>
          <Select
            labelId="video-input-label"
            id="video-input-select"
            value={videoInput}
            onChange={handleVideoInputChange}>
            {videoInputs.map(videoInput => (
              <MenuItem key={videoInput.deviceId} value={videoInput.deviceId}>
                    {videoInput.label}
              </MenuItem>
            ))}
            </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id="audio-input-label">Audio Input</InputLabel>
          <Select
            labelId="audio-input-label"
            id="audio-input-select"
            value={audioInput}
            onChange={handleAudioInputChange}>
            {audioInputs.map(audioInput => (
              <MenuItem key={audioInput.deviceId} value={audioInput.deviceId}>
                    {audioInput.label}
              </MenuItem>
            ))}
            </Select>
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel id="audio-output-label">Audio Output</InputLabel>
          <Select
            labelId="audio-output-label"
            id="audio-output-select"
            value={audioOutput}
            onChange={handleAudioOutputChange}>
            {audioOutputs.map(audioOutput => (
              <MenuItem key={audioOutput.deviceId} value={audioOutput.deviceId}>
                    {audioOutput.label}
              </MenuItem>
            ))}
            </Select>
        </FormControl> */}
      </Dialog>
    </div>
  );
}
