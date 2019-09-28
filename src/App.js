import React, { Component } from 'react';
import Details from './components/details';
import './App.css';
import Github from './github-link.png';
import fetchJsonp from 'fetch-jsonp';

class App extends Component {
  state = {
    ip: '',
    data: {}
  };

  componentDidMount() {
    fetchJsonp('https://api.ipify.org?format=jsonp')
      .then(res => res.json())
      .then(data => this.showIp(data))
      .catch(err => console.log(err));
  }

  showIp({ ip }) {
    fetch(
      `https://api.ipdata.co/${ip}?api-key=${process.env.REACT_APP_API_KEY}`
    )
      .then(res => res.json())
      .then(data => {
        this.setState({ data, ip });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className='overflow-hidden'>
        <a
          href='https://github.com/edroamz/whats-my-ip'
          rel='noreferrer noopener nofollow'
          aria-label='Github repository'
          target='_blank'
          style={{
            position: `absolute`,
            top: `0`,
            right: `0`
          }}
        >
          <img src={Github} alt='Github repo' />
        </a>

        <div className='row mt-3'>
          <div className='col-sm-12 col-md-8 col-xl-6 mx-auto'>
            <center className='mt-5'>
              <h1
                className='mb-5'
                style={{
                  color: `rgb(230, 241, 255)`,
                  boxShadow: `rgba(2, 12, 27, 0.9) 0px 10px 30px -15px`
                }}
              >
                What's my IP Address?
              </h1>
              <div>
                <h2
                  className='ip pt-4 pb-4'
                  style={{
                    background: `rgb(41,61,90)`,
                    borderRadius: `2px`,
                    color: `#fff`
                  }}
                >
                  {this.state.ip ? `👉 ${this.state.ip}` : '-'}
                </h2>
              </div>
            </center>
            {Object.keys(this.state.data).length !== 0 && (
              <Details data={this.state.data} />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
