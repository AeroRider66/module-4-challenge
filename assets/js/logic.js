function readStorage() {
    console.log("reading local storage...");
    const blogStorage = localStorage.getItem("blogPosts") || []
   
    if (blogStorage.length <= 0) {
        console.log("No blogs in storage");
        return;
        
    }

    return JSON.parse(blogStorage)
}

function writeStorage(newPost = {}) {
    console.log("reading local storage...");
    const blogStorage = readStorage()
    console.log(blogStorage, "result");


        if (!blogStorage.title && !blogStorage.name && !blogStorage.content) {
        console.log("Missing keys in blogpost");
        return;
        
    }

    blogStorage.push(newPost);
    localStorage.setItem(JSON.stringify(blogStorage))
    return true;

}


function handleSubmit(event) {
    event.preventDefault()
    console.log(event);
    const newPost = {}

    for (let i = 0; i < event.target.length; i++) {
        const currentInput = event.target[i];
        newPost[currentInput.name] = currentInput.value
        console.log(currentInput.value);
    }
    console.log(newPost);
    // writeStorage(event.target.value)
    
}

blogForm.addEventListener("submit", handleSubmit)