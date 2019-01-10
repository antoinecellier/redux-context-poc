import React, { createContext, Component } from 'react'

const PostsContext = createContext({
    posts: [],
    subreddit: '',
    isFetching: false,
    selectedSubreddit: () => {}
})

export const PostsConsumer = PostsContext.Consumer

export const postsStore = Component => props => (
    <PostsConsumer>
        {store => <Component {...props} {...store} />}
    </PostsConsumer>
)

class PostsProvider extends Component {
    state = {
        posts: [],
        subreddit: 'reactjs',
        isFetching: false,
        selectedSubreddit: (subreddit) => this.fetchPosts(subreddit)
    }

    fetchPosts = (subreddit) => {
        this.setState({...this.state, isFetching: true, posts: [] })
        return fetch(`https://www.reddit.com/r/${subreddit}.json`)
            .then(response => response.json())
            .then(json => this.setState({
                ...this.state, 
                posts: json.data.children.map(child => child.data),
                lastUpdated: Date.now(),
                isFetching: false,
                subreddit
            }))
    }

    render() {
        return (
            <PostsContext.Provider value={{ ...this.state, fetchPosts: this.fetchPosts }}>
                {this.props.children}
            </PostsContext.Provider>
        )
    }
}

export default PostsProvider;
