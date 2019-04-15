import React, { Component } from 'react';
import PropTypes from 'prop-types';
// 属性校验

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);  // 节约性能
  }

  // 子组件的性能优化
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.content !== this.props.content) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    const { content } = this.props;
    return (
      <div onClick={this.handleClick}>
        {content}
      </div>
    )
  }

  handleClick() {
    const { handleItemDelete, index } = this.props;
    handleItemDelete(index);
  }
}

// 数据校验，限制父到子组件传值的数据类型1
// test: PropTypes.string.isRequired    指必须传递test进子组件，否则会报错
TodoItem.propTypes = {
  content: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  handleItemDelete: PropTypes.func,
  index: PropTypes.number
  // xxx: PropTypes.arrayOf(PropTypes.number, PropTypes.string)    或者
}

// 默认值定义
TodoItem.defaultProps = {
  test: 'hello world'
}

export default TodoItem;