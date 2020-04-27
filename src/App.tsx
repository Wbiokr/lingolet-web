import React, { Component } from 'react';
import * as Router from 'react-router-dom';
import Nav from '@/components/layout/nav';
import Menu from '@/components/layout/menu';
import Header from '@/components/layout/header';
import routes from '@/route/index';
import * as redux from 'react-redux';
import { Common } from '@/interface/common';

const { connect } = redux as any;

const { Route, Switch, Redirect, withRouter } = Router as any;

class App extends Component {
  
  private constructor(props: any) {
    super(props)
  }
  
  public state = {
    staticRoutes: ['home','login','register','password','static'],
  }

  public render() {

    const { location } = this.props as any;
    const pathStartStr=location.pathname.split('/')[1];

    return (

        <div className="app f-column" style={{minHeight: (this as any).props.common.height+"px"}}>
          {
            this.state.staticRoutes.includes(pathStartStr) ? 
            <Nav></Nav> :
            <Header></Header>
          }
          <main className='f-1'>
            {
              this.state.staticRoutes.includes(pathStartStr) ? 
              null :
              <Menu></Menu>
            }
            <article className='container'>
              <Switch>
                {
                  routes.map((item, index) => {
                    return <Route {...item} key={index}></Route>
                  })
                }
                <Redirect to="/home" from='/' /> 
              </Switch>
            </article>
          </main>
        </div>
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
    return state.common.height===(this as any).props.common.height&&state.common.width===(this as any).props.common.width;
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


export default connect(mapStateToProps,mapDispatchToProps)(withRouter(App));
