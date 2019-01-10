import React, { Component } from 'react'
import { postsStore } from '../components/Posts.context'
import Posts from '../components/Posts'
import Picker from '../components/Picker'

class AppWithContext extends Component {
    componentDidMount() {
        this.props.fetchPosts(this.props.subreddit)
    }

    render() {
        const { posts, subreddit, selectedSubreddit, lastUpdated, isFetching } = this.props 
        return (
            <div>
                <h2>Api context</h2>
                <Picker value={this.props.subreddit}
                        onChange={this.props.selectedSubreddit}
                        options={[ 'reactjs', 'frontend' ]} />
                <p>
                {lastUpdated &&
                    <span>
                    Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
                    {' '}
                    </span>
                }
                {!isFetching &&
                    <button onClick={this.handleRefreshClick}>
                    Refresh
                    </button>
                }
                </p>
                {posts.length === 0
                    ? (isFetching ? <h2>Loading...</h2> : <h2>Empty.</h2>)
                    : <div style={{ opacity: isFetching ? 0.5 : 1 }}>
                        <Posts posts={posts} />
                    </div>
                }
            </div>
        )
    }
}

export default postsStore(AppWithContext)