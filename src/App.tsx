import React, { Component } from 'react';
import * as Router from 'react-router-dom';
import Nav from '@/components/layout/nav';
import Menu from '@/components/layout/menu';
import Header from '@/components/layout/header';
import routes from '@/route/index';
import * as redux from 'react-redux';
import { Common } from '@/interface/common';
import { Button } from 'antd';

const { connect } = redux as any;

const { HashRouter, Route, Switch } = Router as any;

class App extends Component {
  
  private constructor(props: any) {
    super(props)
  }

  public render() {
    return (
      <HashRouter className='hash'>

        <div className="app">
          <Nav></Nav>
          <Button>hello</Button>
          {/* <Header></Header> */}
          <main>
            {/* <Menu></Menu> */}
            <article className='container'>
              <Switch>
                {
                  routes.map((item, index) => {
                    return <Route {...item} key={index}></Route>
                  })
                }
              </Switch>
            </article>
          </main>
        </div>
      </HashRouter>
    );
  }

  public componentDidMount() {
    window.addEventListener('resize',()=>{

        (this as any).props.$setHeight();
        (this as any).props.$setWidth();
      
      }
    )
  }

  public componentWillUpdate(state: Common) {
    return state.common.height==(this as any).props.common.height&&state.common.width==(this as any).props.common.width;
  }
}

const mapStateToProps = (state: Common) => ({
  common: state.common
})

const mapDispatchToProps = (dispatch: Function) => ({
  $setHeight(height: number){
    dispatch({
      type:'common_change_height',
      height:height||window.innerHeight
    })
  },
  $setWidth(width: number){
    dispatch({
      type:'common_change_width',
      width:width||window.innerWidth
    })
  }
})


export default connect(mapStateToProps,mapDispatchToProps)(App);
