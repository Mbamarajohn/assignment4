const postAuthor =(req,res)=>{
    res.status(200).send('author created successfully');

};

const getAuthors =(req,res)=>{
    res.status(200).send('suscessful');
};

const updateAuthors = (req,res)=>{
    res.status(200).send('authors updated suscessfully');
};


const deleteAuthors = (req,res)=>{
    res.status(200).send('authors deleted suscessfully');
};



module.exports ={
    postAuthor,
    getAuthors,
    updateAuthors,
    deleteAuthors
}

