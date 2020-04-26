import React,{Component} from 'react';
import { Button } from 'antd';

class Home extends Component {
  private constructor(props: any) {
    super(props)
  }

  public render() {
    return <div>
      <h2>首页</h2>
      <Button>antd 按钮</Button>
    </div>
  }

  public componentDidMount() {
    console.log(this)
  }
}

export default Home;