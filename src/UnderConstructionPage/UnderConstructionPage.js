import React from 'react';
import './UnderConstructionPage.scss';

export default class UnderConstructionPage extends React.Component {

  componentDidMount() {
    if ('addEventListener' in window) {
				window.addEventListener('load', function() { document.body.className = document.body.className.replace(/\bis-loading\b/, ''); });
				document.body.className += (navigator.userAgent.match(/(MSIE|rv:11\.0)/) ? ' is-ie' : '');
			}
  }

  render() {
    return (
      <div className="App">
					<section id="main">
						<header>
							<h2>New MentorSEAS Website Development in Progress</h2>
						</header>
						<footer>
							<ul className="icons">
								<li><a href="https://www.facebook.com/mentorSEAS/" className="fa-facebook">Facebook</a></li>
							</ul>
						</footer>
					</section>

					<footer id="footer">
						<ul className="copyright">
							<li>&copy; MentorSEAS</li><li><a href="http://engineering.ucla.edu/">UCLA School of Engineering</a></li>
						</ul>
					</footer>

      </div>
    );
  }
}
