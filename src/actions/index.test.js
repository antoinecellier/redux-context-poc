const rewire = require("rewire")
const index = rewire("./index")
const fetchPosts = index.__get__("fetchPosts")
const shouldFetchPosts = index.__get__("shouldFetchPosts")
// @ponicode
describe("index.selectSubreddit", () => {
    test("0", () => {
        let callFunction = () => {
            index.selectSubreddit("da7588892")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index.selectSubreddit(9876)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index.selectSubreddit(12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index.selectSubreddit("bc23a9d531064583ace8f67dad60f6bb")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index.selectSubreddit("c466a48309794261b64a4f02cfcc3d64")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            index.selectSubreddit(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.invalidateSubreddit", () => {
    test("0", () => {
        let callFunction = () => {
            index.invalidateSubreddit("c466a48309794261b64a4f02cfcc3d64")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index.invalidateSubreddit(9876)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index.invalidateSubreddit("bc23a9d531064583ace8f67dad60f6bb")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index.invalidateSubreddit(12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index.invalidateSubreddit("da7588892")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            index.invalidateSubreddit(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.requestPosts", () => {
    test("0", () => {
        let callFunction = () => {
            index.requestPosts("bc23a9d531064583ace8f67dad60f6bb")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index.requestPosts(12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index.requestPosts(9876)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index.requestPosts("c466a48309794261b64a4f02cfcc3d64")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index.requestPosts("da7588892")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            index.requestPosts(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.receivePosts", () => {
    test("0", () => {
        let callFunction = () => {
            index.receivePosts("da7588892", { data: { children: { map: () => "Michael" } } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index.receivePosts("c466a48309794261b64a4f02cfcc3d64", { data: { children: { map: () => "Michael" } } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index.receivePosts("bc23a9d531064583ace8f67dad60f6bb", { data: { children: { map: () => "Edmond" } } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index.receivePosts("da7588892", { data: { children: { map: () => "Edmond" } } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index.receivePosts(12345, { data: { children: { map: () => "George" } } })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            index.receivePosts(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("fetchPosts", () => {
    test("0", () => {
        let callFunction = () => {
            fetchPosts("da7588892")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            fetchPosts("c466a48309794261b64a4f02cfcc3d64")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            fetchPosts(12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            fetchPosts(9876)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            fetchPosts("bc23a9d531064583ace8f67dad60f6bb")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            fetchPosts(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("shouldFetchPosts", () => {
    test("0", () => {
        let object = [[10.23, -29.45, 10.23], [10.0, 10.0, 0.0], [10.23, 0.0, -29.45]]
        let callFunction = () => {
            shouldFetchPosts({ postsBySubreddit: object }, "da7588892")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let object = [[0.5, 10.0, -1.0], [-1.0, -29.45, -29.45], [0.0, 10.23, 0.0]]
        let callFunction = () => {
            shouldFetchPosts({ postsBySubreddit: object }, 12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let object = [[1.0, -0.5, 10.23], [-29.45, -1.0, 1.0], [-1.0, -29.45, 0.0]]
        let callFunction = () => {
            shouldFetchPosts({ postsBySubreddit: object }, "bc23a9d531064583ace8f67dad60f6bb")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let object = [[1.0, 0.5, -0.5], [10.23, 0.0, 10.0], [0.0, 10.23, 1.0]]
        let callFunction = () => {
            shouldFetchPosts({ postsBySubreddit: object }, "da7588892")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let object = [[10.23, -29.45, 10.0], [-29.45, 0.5, 10.0], [10.23, 10.0, 10.23]]
        let callFunction = () => {
            shouldFetchPosts({ postsBySubreddit: object }, 12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            shouldFetchPosts(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("index.fetchPostsIfNeeded", () => {
    test("0", () => {
        let callFunction = () => {
            index.fetchPostsIfNeeded("bc23a9d531064583ace8f67dad60f6bb")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            index.fetchPostsIfNeeded(9876)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            index.fetchPostsIfNeeded("da7588892")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            index.fetchPostsIfNeeded(12345)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            index.fetchPostsIfNeeded("c466a48309794261b64a4f02cfcc3d64")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            index.fetchPostsIfNeeded(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
