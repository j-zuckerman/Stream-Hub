import React, { Component } from 'react';
import styled from 'styled-components';

const Streamer = styled.div`
  border-radius: 1rem;
  background-color: #212121;
  padding: 0.3rem;

  &:hover: {
    transform: scale(1.03);
  }
`;

const StreamerInfo = styled.span`
  padding: 1rem;
`;
const StreamerName = styled.span`
  font-weight: 250;
  color: white;
  letter-spacing: -1px;
  font-size: 1.6rem;
  margin-left: 0.5rem;
`;

const WatchButton = styled.a`
  background-color: #5e227a;
  color: white;
  padding: 1rem;
  font-size: 1.25rem;
  text-decoration: none;
  position: absolute;
  bottom: 10%;
  right: 5%;
  text-transform: uppercase;

  &:hover {
    transform: scale(1.05);
    background-color: #421856;
  }
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
  border: 3px solid #5e227a;
  vertical-align: middle;
`;

const ViewerCountDetails = styled.span`
  position: absolute;
  bottom: 10%;
  left: 3.5%;
`;

const ViewerCount = styled.span`
  font-size: 1.2rem;
  color: white;
`;

const RedDot = styled.span`
  height: 10px;
  width: 10px;
  background-color: red;
  border-radius: 50%;
  display: inline-block;
  margin-right: 5px;
`;

const StreamThumbnail = styled.img`
  width: 100%;
  height: auto;
  border-radius: 1rem;
  opacity: 0.7;
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
  font-size: 1.55rem;
  color: white;
  text-align: center;
  font-weight: 300;
`;

const StreamOverview = styled.div`
  position: relative;
`;

class StreamCard extends Component {
  render() {
    return (
      <Streamer>
        <StreamerInfo>
          <StreamerLogo src={this.props.stream.channel.logo} />
          <StreamerName>{this.props.stream.channel.display_name}</StreamerName>
        </StreamerInfo>
        <GamePlaying>{this.props.stream.channel.game}</GamePlaying>
        <StreamOverview>
          <StreamThumbnail src={this.props.stream.preview.large} />;
          <StreamTitle>{this.props.stream.channel.status}</StreamTitle>
          <ViewerCountDetails>
            <RedDot />
            <ViewerCount>
              {this.props.stream.viewers + ' Watching Now'}
            </ViewerCount>
          </ViewerCountDetails>
          <WatchButton href={this.props.stream.channel.url} target="_blank">
            Watch Now
          </WatchButton>
        </StreamOverview>
      </Streamer>
    );
  }
}

export default StreamCard;
