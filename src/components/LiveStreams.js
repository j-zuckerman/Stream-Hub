import React, { Component } from 'react';
import StreamCard from './StreamCard';
import styled from 'styled-components';

const twitchAPIUrl = 'https://api.twitch.tv/kraken/streams?channel=';
const channelNames =
  'mizkif,ninja,destiny,xQcOW,Hyphonix,Boneclinks,shroud,DrDisrespect,LIRIK,AndyMilonakis,Greekgodx,trihex,cloakzy,Tfue,Reckful,Asmongold,erobb221,Yassuo,Trainwreckstv,sodapoppin,MitchJones,Nmplol,summit1g,loltyler1,pokelawls,ZeRo,CoconutB';
const CLIENT_ID = 'qc6qmzy5llaqzvfagxyjw7ekzpzs3s';

const Grid = styled.div`
  margin: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(600px, 1fr));
  grid-gap: 1.25rem;
`;

const StreamerCount = styled.span`
  position: relative;
  color: white;
  font-size: 1.85rem;
  font-weight: 230;
  letter-spacing: -1px;
  margin: 3.5rem 1rem 2.5rem 1rem;

  &[data-badge]:after {
    content: attr(data-badge);
    position: absolute;
    top: -10px;
    right: -10px;
    font-size: 0.7em;
    background: green;
    color: white;
    width: 18px;
    height: 18px;
    text-align: center;
    line-height: 18px;
    border-radius: 50%;
    box-shadow: 0 0 1px #333;
  }
`;

class LiveStreams extends Component {
  constructor(props) {
    super(props);
    this.state = {
      liveStreams: null
    };
  }
  async componentDidMount() {
    const response = await fetch(
      twitchAPIUrl + channelNames + '&client_id=' + CLIENT_ID
    );

    const streamData = await response.json();
    console.log(streamData);
    this.setState({ liveStreams: streamData });
  }

  render() {
    if (this.state.liveStreams != null) {
      return (
        <main>
          <StreamerCount data-badge={this.state.liveStreams._total}>
            Live Streams
          </StreamerCount>

          <Grid>
            {this.state.liveStreams.streams.map(stream => (
              <StreamCard key={stream.channel._id} stream={stream} />
            ))}
          </Grid>
        </main>
      );
    } else return null;
  }
}

export default LiveStreams;
