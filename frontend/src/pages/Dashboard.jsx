import { responsiveProperty } from '@mui/material/styles/cssUtils';
import React from 'react';
import ResponsiveNavBar from '../components/basic/ResponsiveNavBar';
import CreatePost from '../components/CreatePost';
import PostList from '../components/PostList';

const Dashboard = () => {


    return <>
        <ResponsiveNavBar/>
        <PostList/>
    </>;
};

export default Dashboard;