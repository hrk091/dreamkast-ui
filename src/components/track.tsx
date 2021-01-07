import React, { useState } from 'react'
import Player from '../components/player'
import TalkInfo from '../components/talk-info'
import Chat from './chat'
import Grid from '@material-ui/core/Grid'
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { Talks } from '../utils/talk-data'
import { Talk } from '../interfaces'
import TalkSelector from './talk-selector'

type Props = {
  selectedTrackId: string
  selectedTalk: Talk
  talks: Talk[]
  selectTalk?: Function
}

const useStyles = makeStyles((theme) => ({
  player: {
    //backgroundColor: "#CC0",
  },
  chat: {
    //backgroundColor: "#CC0",
  }
}));

const currentVimeoId = ({ selectedTalk, selectedTrackId, talks }: Props) => {
  const ids = { 1: "450845161", 2: "450845160", 3: "450845161", 4: "450845161", 5: "450845161", 6: "450845161" }
  var currentId = ""
  talks.forEach(talk => {
    if (talk.id == selectedTalk.id) {
      currentId = talk.vimeoId;
    }
  });
  return currentId;
}

const Track = ({ selectedTalk, selectedTrackId, isLive, talks, selectTalk }: Props) => {
  const classes = useStyles();


  return (
    <Grid container spacing={1} justify="center" alignItems="center" alignContent="center">
      <Grid item xs={12} md={8} className={classes.player} justify="center" alignItems="center" alignContent="center">
        <Player vimeoId={currentVimeoId({ selectedTalk, selectedTrackId, isLive, talks })} autoplay={false}></Player>
      </Grid>
      <Grid item xs={12} md={3} className={classes.chat} justify="center" alignItems="center" alignContent="center">
        <Chat talk_id={selectedTalk.id} />
      </Grid>
      <Grid item xs={12} md={8} className={classes.player} justify="center" alignItems="center" alignContent="center">
        <TalkInfo selectedTalk={selectedTalk} />
      </Grid>
      <Grid
        item
        xs={12}
        md={3}
        className={classes.chat}>
          <h2>このトラックのセッション</h2>
          <TalkSelector
            selectedTalk={selectedTalk}
            selectedTrackId={selectedTrackId}
            talks={talks}
            selectTalk={selectTalk} />
      </Grid>
    </Grid>
  )
}

export default Track;
