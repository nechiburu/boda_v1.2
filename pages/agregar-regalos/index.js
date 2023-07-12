import React, { Fragment } from 'react';
import { useRouter } from 'next/router'
import blogs from '../../api/blogs'
import Header2 from '../../components/header2'
import AdminMenu from '../../components/AdminMenu'

const submitHandler = (e) => {
    e.preventDefault()
}


const BlogSingle = (props) => {
    const router = useRouter()

    const BlogDetails = blogs.find(item => item.slug === router.query.slug)


    return (
        <Fragment>
        <Header2/>
        <AdminMenu/>
        

      <div class="app-header ">
        <div class="flex justify-between ">
          <div class="">
            
          </div>
       
       <h3>agregar Regalos </h3>

          <div>
            
       </div>
      </div>
            
      </div>
       
       <h3>agregar Regalos </h3>

          <div>
    </div>
   
    </Fragment>
    )
};
export default BlogSingle;