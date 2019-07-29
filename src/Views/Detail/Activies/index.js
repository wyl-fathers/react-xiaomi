import React,{Component} from 'react';
import axios from 'axios'
import css from './index.module.scss'

class Activies extends Component{
    state ={
            dataList:[],
            isShow:false,
    }
    render(){
        return (
          <div>
            {this.state.dataList?
            <div className={css.sell}>
              <span style={{position:'absolute',marginTop:'.15rem',color:'#999'}}>促销</span>
                {
                    this.state.dataList.map(item =>
            <div key="index" onClick={this.handleClick} className={css.pad}>
             <span className={css.type}>{item.type_desc}</span>
             <span className={css.title}>{item.title}<span className="iconfont" style={{float:'right',}}>&#xe683;</span></span>
            </div>                        
                        )
                }
  
          { 
            this.state.isShow?
          <div>
          <div className={css.cover}></div>
           <div className={css.popup}>
             <div className={css.disapper} onClick={this.handleDisapper}>
               X
             </div>
             {
                 this.state.dataList.map((item,index) =>
             <div key={index+'div'} className={css.con}>
               <span key={index+'span1'} className={css.popupType}>{item.type_desc}</span>
               <span key={index+'span2'} className={css.popupTitle}>{item.title}</span>
             </div>
                 )
             }
           </div>
           </div>:null
           }
          </div>:null
            }
        </div>  
          )
    }
    handleClick = () =>{
      this.setState({
        isShow:true
      })
    }
    handleDisapper = () =>{
      this.setState({
        isShow:false
      })
    }

    componentWillMount(){
        axios({
            method: "post",
            url: "/v1/miproduct/activity_info",
            data:'client_id=180100031051&channel_id=0&webp=1&commodity_ids=1191900041%2C1191900050%2C1191900053%2C1191900040%2C1191900039%2C1191900049%2C1191900048%2C1191900051%2C1191900052%2C1191900047%2C1191900045%2C1191900046&goods_id=2191900023%2C2191900032%2C2191900035%2C2191900022%2C2191900021%2C2191900031%2C2191900030%2C2191900033%2C2191900034%2C2191900029%2C2191900027%2C2191900028&is_batched=false'
         }).then(resp =>{
           console.log(resp.data.data.activies[0].canJoinActs)
           this.setState({
               dataList:resp.data.data.activies[0].canJoinActs,
           })
         })
     
    }

}







export default Activies