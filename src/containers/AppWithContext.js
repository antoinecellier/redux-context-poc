import React, { Component } from 'react'
import { PostsContext } from '../context/posts'
import { ThemeContext, withThemeStore } from '../context/theme'
import Posts from '../components/Posts'
import Picker from '../components/Picker'

class AppWithContext extends Component {
    static contextType = PostsContext

    componentDidMount() {
        this.context.fetchPosts(this.context.subreddit)
    }

    render() {
        console.log(this.context)
        const { posts, subreddit, fetchSubreddit, lastUpdated, isFetching } = this.context 
        const { backgroundColor, switchBackground } = this.props
        return (
            <div style={{ backgroundColor: this.props.backgroundColor }}>
                <h2>Api context</h2>
                Change theme: <Picker value={this.props.backgroundColor}
                        onChange={this.props.switchBackground}
                        options={[ 'white', 'red' ]} />

                <Picker value={this.context.subreddit}
                        onChange={this.context.fetchSubreddit}
                        options={[ 'reactjs', 'frontend' ]} />
                <p>
                {lastUpdated &&
                    <span>
                    Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
                    {' '}
                    </span>
                }
                {!isFetching &&
                    <button onClick={this.fetchSubreddit}>
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

export default withThemeStore(AppWithContext)