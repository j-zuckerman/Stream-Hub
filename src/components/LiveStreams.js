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

const Header = styled.div`
  margin: 3.5rem 1rem 2.5rem 1rem;
`;

const StreamerCount = styled.span`
  position: relative;
  color: white;
  font-size: 1.85rem;
  font-weight: 230;
  letter-spacing: -1px;

  &[data-badge]:after {
    content: attr(data-badge);
    position: absolute;
    top: -0.75rem;
    right: -1.25rem;
    font-size: 1.3rem;
    background: #5e227a;
    color: white;
    width: 18px;
    height: 18px;
    text-align: center;
    line-height: 18px;
    border-radius: 50%;
    padding: 0.2rem;
  }
`;

const Divider = styled.hr`
  margin: 1rem;
  height: 2px;
  background-color: rgba(255, 255, 255, 0.12);
  border: none;
  flex-shrink: 0;
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
          <Header>
            <StreamerCount data-badge={this.state.liveStreams._total}>
              Live Streams
            </StreamerCount>
          </Header>

          <Divider />

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
