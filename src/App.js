import React, { Component } from 'react'
import Example from './Components/Example'
import Example2 from './Components/Example2'
import Example3 from './Components/Example3'
import { Grid, Container, Tab } from 'semantic-ui-react'

import './App.css'

class App extends Component {
  render() {
    const panes = [
      {
        menuItem: 'Cats',
        render: () => (
          <Tab.Pane>
            <Grid.Row>
              <Grid.Column>
                <Example />
              </Grid.Column>
              <Grid.Column>
                <Example />
              </Grid.Column>
            </Grid.Row>
          </Tab.Pane>
        )
      },
      {
        menuItem: 'Dogs',
        render: () => (
          <Tab.Pane>
            <Grid.Row>
              <Grid.Column>
                <Example2 />
              </Grid.Column>
              <Grid.Column>
                <Example2 />
              </Grid.Column>
            </Grid.Row>
          </Tab.Pane>
        )
      },
      {
        menuItem: 'Hamsters',
        render: () => (
          <Tab.Pane>
            <Grid.Row>
              <Grid.Column>
                <Example3 />
              </Grid.Column>
              <Grid.Column>
                <Example3 />
              </Grid.Column>
            </Grid.Row>
          </Tab.Pane>
        )
      }
    ]
    return (
      <div className="App">
        <Container centered>
          <Grid style={{ marginTop: '5em' }} stackable columns={2}>
            <Tab basic panes={panes} menu={{ color: 'blue' }} />
          </Grid>
        </Container>
      </div>
    )
  }
}

export default App
