const imageMapper = (name) => {
    let path = '' 
    try {
      require(`../images/${name}.jpg`);
      path = name + '.jpg';
      return path;
    } catch (err) {
      try {
        require(`../images/${name}.png`)
        path = name + '.png'
        return path;
      } catch (err) {
        path = 'default.png'
        return path;
      }
    }
  }

  export default imageMapper;