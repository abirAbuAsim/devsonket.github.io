import React from 'react';
import Container from './Container';
import Card from './Card';

import organizedData from '../utils/organizedData';

export default ({data}) => (
  <Container>
    <section className="contents mt-0">
      <h2>সবগুলো</h2>
      {data ? Object.keys(organizedData(data)).map((char, index) => (
        <React.Fragment key={index}>
          <div className="content">
            <h3>{char}</h3>
            <div className="items">
            {organizedData(data)[char].map(({id, title}) => (
              <Card key={id} id={id} title={title} />
            ))}
            </div>
          </div>
        </React.Fragment>
      )) : 'Loading'}
    </section>
  </Container>
)
