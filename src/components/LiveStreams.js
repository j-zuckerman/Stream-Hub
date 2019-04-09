import React, { Component } from 'react';

const twitchAPIUrl = 'https://api.twitch.tv/kraken/streams?channel=';
const channelNames =
  'mizkif,ninja,destiny,xQcOW,Hyphonix,Boneclinks,shroud,DrDisrespect,LIRIK,AndyMilonakis,Greekgodx,trihex,cloakzy,Tfue,Reckful,Asmongold,erobb221,Yassuo,Trainwreckstv,sodapoppin,MitchJones,Nmplol,summit1g,loltyler1,pokelawls,ZeRo,CoconutB';
const CLIENT_ID = 'qc6qmzy5llaqzvfagxyjw7ekzpzs3s';

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
    this.setState({ liveStreams: streamData.streams });
  }

  render() {
    if (this.state.liveStreams != null) {
      return (
        <div>
          {this.state.liveStreams.map(stream => (
            <div>
              <h2>{stream.channel.display_name}</h2>
              <a href={stream.channel.url}>Watch Now</a>
              <h2>{stream.viewers}</h2>
              <h2>{stream.channel.game}</h2>
              <img src={stream.channel.logo} />
              <img src={stream.preview.large} />
            </div>
          ))}
        </div>
      );
    } else return <h1>hi</h1>;
  }
}

export default LiveStreams;
