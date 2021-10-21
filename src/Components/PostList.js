import React, { Component } from 'react'
import axios from 'axios'
 
 
 class PostList extends Component {
     constructor(props) {
         super(props)
     
         this.state = {
              posts:[]
         }
     }

     
     componentDidMount(){
         axios.get("https://jsonplaceholder.typicode.com/posts")
         .then(res=> { 
            console.log(res)
             this.setState({
                 posts:res.data
             })

            })

         .catch(error =>{
             console.log(error)
             this.setState({
                 errorMessage:"Error retreiving data"
             })
         })
 }



     render() {
        const {posts,errorMessage} = this.state
         return (
             <div>
                <h2>Lists of Posts</h2>
                {
                 posts.length?
                 posts.map(post => <div key={post.id}>{post.title}</div>):null  
                }
                {
                    errorMessage ? <div>{errorMessage}</div>:null
                }
             </div>
         )
     }
 }





 
  /*class PostList extends Component {
      constructor(props) {
          super(props)
      
          this.state = {
               posts:[]
          }
      }

      componentDidMount(){
          axios.get("https://jsonplaceholder.typicode.com/posts")
          .then(resp => {
              console.log(resp)
              this.setState({
                  posts:res.data
              })
            })


          .catch(err=>{
              console.log(err)
              this.setState({
                  message:"Error getting data"
              })
          })
      }
      
     render() {
         const {posts,message} = this.state
         return (
             <div>
             <h2>Lists</h2>
             {
                 posts.length ?
                 posts.map(post => <div key = {post.id}>{post.title}</div>):null
             }
                {message?<div>{message}</div>:null} 
             </div>
         )
     }
 }
 
 export default PostList*/
 


 
export default PostList
 
     
    
    

