import React,{ Component } from 'react'
import Scrollbar from 'react-smooth-scrollbar'
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll'
import SmoothScrollbar, { ScrollbarPlugin } from 'smooth-scrollbar';

SmoothScrollbar.initAll();
SmoothScrollbar.use(OverscrollPlugin);

export default class VerticalityScroll extends Component {
  componentDidMount() {
    // this.VerticalityScroll = SmoothScrollbar.init(this.$container, this.props);
    // this.scrollbar = SmoothScrollbar.init(this.$container, this.props);
    // this.scrollbar = this.$container.scrollbar;
    // Scrollbar.initAll();
    // this.scrollbar = SmoothScrollbar.init(this.$container, this.props);
    Scrollbar.init(document.querySelector('.zebal'));
  }

  render() {
    return (
      <Scrollbar 
        className='zebal'
        style={{height: '100vh'}}
        ref={element => this.$container = element}
        damping={0.1}
        plugins={{
            overscroll: false
        }}
      >
        {this.props.children}
      </Scrollbar>
    );
  }
}
