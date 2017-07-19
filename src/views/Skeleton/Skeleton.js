import React, { Component } from 'react';
import Navbar from 'views/Navbar';
import Footer from 'views/Footer';
import { pages } from 'app';

import './Skeleton.scss';
import 'scss/General.scss';

export default class Skeleton extends Component {
   render() {
      return (
         <div>
            <Navbar items={pages}/>
              {this.props.children}
            <Footer internalLinks={pages}/>
         </div>
      );
   }
}
