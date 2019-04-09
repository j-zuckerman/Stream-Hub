import React, { Component } from 'react';
import styled from 'styled-components';

const Streamer = styled.div`
  border-radius: 1rem;
  background-color: #212121;
  padding: 0.3rem;
`;

const StreamerName = styled.p`
  font-weight: 250;
  color: #4c2c72;
  letter-spacing: -1px;
  font-size: 1.5rem;
`;

const WatchButton = styled.a`
  background-color: #0f084b;
  color: white;
  padding: 1rem;
  font-size: 1.25rem;
  text-decoration: none;
  position: absolute;
  bottom: 10%;
  right: 5%;
  text-transform: uppercase;
`;

const StreamTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 400;
  color: white;
  position: absolute;
  top: 0;
  left: 3%;
  text-decoration: underline;
`;

const StreamerLogo = styled.img`
  width: 50px;
  height: auto;
  border-radius: 50%;
  border: 3px solid #0f084b;
`;

const StreamHeader = styled.div`
  display: flex;
`;

const ViewerCount = styled.h3`
  font-size: 1.2rem;
  color: white;
  position: absolute;
  top: 20%;
  left: 3%;
`;

const StreamThumbnail = styled.img`
  width: 100%;
  height: auto;
  border-radius: 1rem;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-image: linear-gradient(to bottom right, #002f4b, #dc4225);
    opacity: 0.6;
  }
`;

const GamePlaying = styled.h2`
  font-size: 1.3rem;
  color: white;
  text-align: center;
`;

const StreamOverview = styled.div`
  position: relative;
`;

const RedDot = styled.span`
  width: 10px;
  height: 10px;
  margin-top: 7.5px;
  border-radius: 50%;
  background-color: red;
`;
class StreamCard extends Component {
  render() {
    return (
      <Streamer>
        <span>
          <StreamerLogo src={this.props.stream.channel.logo} />
          <StreamerName>{this.props.stream.channel.display_name}</StreamerName>
        </span>
        <GamePlaying>{this.props.stream.channel.game}</GamePlaying>
        <StreamOverview>
          <StreamThumbnail src={this.props.stream.preview.large} />;
          <StreamTitle>{this.props.stream.channel.status}</StreamTitle>
          <ViewerCount>{this.props.stream.viewers}</ViewerCount>
          <WatchButton href={this.props.stream.channel.url} target="_blank">
            Watch Now
          </WatchButton>
        </StreamOverview>
      </Streamer>
    );
  }
}

export default StreamCard;
