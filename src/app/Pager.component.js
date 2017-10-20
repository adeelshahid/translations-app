import React from 'react';

import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';

import AppTheme from '../colortheme';

import i18next from 'i18next';

const Pager = React.createClass({
    propTypes: {
        pager: React.PropTypes.object.isRequired,
        page: React.PropTypes.number.isRequired,
        action:  React.PropTypes.func.isRequired,
    },

    contextTypes: {
        d2: React.PropTypes.object,
    },


    firstPage(event) {
      this.props.action(-1000);
    },

    previousPage(event) {
      this.props.action(-1);
    },

    nextPage(event) {
      this.props.action(1);
    },

    lastPage(event) {
      this.props.action(1000);
    },

    render() {
      const d2 = this.context.d2;

      return (
        <div style={{ paddingTop: '.75rem'}}>
          <IconButton tooltip={i18next.t('First page')} tooltipPosition="top-left"
              disabled={this.props.page<=1}
              onClick={this.firstPage}>
            <FontIcon className="material-icons">fast_rewind</FontIcon>
          </IconButton>
          <IconButton tooltip={i18next.t('Previous page')} tooltipPosition="top-left"
              disabled={this.props.page<=1}
              onClick={this.previousPage}>
            <FontIcon className="material-icons">navigate_before</FontIcon>
          </IconButton>
          &nbsp;
          {this.props.pager.page} / {this.props.pager.pageCount}
           &nbsp;
          <IconButton tooltip={i18next.t('Next page')} tooltipPosition="top-right"
              disabled={this.props.page == this.props.pager.pageCount}
              onClick={this.nextPage}>
            <FontIcon className="material-icons">navigate_next</FontIcon>
          </IconButton>
          <IconButton tooltip={i18next.t('Final page')} tooltipPosition="top-right"
              disabled={this.props.page == this.props.pager.pageCount}
              onClick={this.lastPage}>
            <FontIcon className="material-icons">fast_forward</FontIcon>
          </IconButton>
        </div>
      );

    },
});

export default Pager;
