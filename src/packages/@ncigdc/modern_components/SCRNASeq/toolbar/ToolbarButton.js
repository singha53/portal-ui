import React, { Component } from 'react';
import FullScreenIcon from 'react-icons/lib/md/fullscreen';

import Button from '@ncigdc/uikit/Button';
import { visualizingButton } from '@ncigdc/theme/mixins';
import { Tooltip } from '@ncigdc/uikit/Tooltip';
import Hidden from '@ncigdc/components/Hidden';

export default class ToolbarButton extends Component {
  handleClick = e => {
    const { onToolbarClick = () => {} } = this.props;
    onToolbarClick(e);
  }

  render() {
    const {
      attr = '',
      faClass = '',
      label,
      name,
      val = '',
    } = this.props;
    return (
      <Tooltip
        Component={
          <div>{label}</div>
        }
        >
        <Button
          data-attr={attr}
          data-name={name}
          data-val={val}
          onClick={this.handleClick}
          style={{
            ...name === 'downloadAnalysis' ? {} : visualizingButton,
            marginLeft: 6,
          }}
          >
          {faClass && (
            <i
              aria-hidden="true"
              className={`fa ${faClass}`}
              />
          )}
          {name === 'fullscreen' && <FullScreenIcon />}
          {name === 'downloadAnalysis'
            ? <span style={{ marginLeft: 6 }}>{label}</span>
            : <Hidden>{label}</Hidden>}
        </Button>
      </Tooltip>
    );
  }
}
