class imageclass{
    
    constructor(path, x, y)
    {
        var random= Math.floor(Math.random());
        random.path = path;
        random.x = x;
        random.y = y;
    }
random=Math.floor(math)
    getImage()
    {
        var Image = loadImage(url('assets/Pillar.png'));
        return Image;
    }
    getX()
    {
        return this.x;
    }
    getY()
    {    

        return this.y;
    }
    setX(x)
    {
        this.x = x;
    }
    setY(y)
    {
        this.y = y;
    }
}//for image class

