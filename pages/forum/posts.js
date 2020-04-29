import React from 'react'
import ForumContainer from '../../components/forum/ForumContainer.js';
import withApollo from '../../lib/apollo.js';
import Layout from '../../components/Layout/index.js';
import {CenteredContainer} from '../../components/Layout/LayoutPrimitives.js';

const posts = () => {
    return (
        <Layout>
            <ForumContainer />
        </Layout>
    )
}

export default withApollo(posts);