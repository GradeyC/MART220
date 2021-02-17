class imageclass{
    var randomX= Math.floor(Math.random());
    constructor(path, x, y)
    {
        this.path = path;
        this.x = x;
        this.y = y;
    }
random=Math.floor(math)
    getImage()
    {
        var Image = loadImage(url('assets/'));
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
        var randomX= Math.floor(Math.random(1-100));
        this.x = randomX;
    }
    setY(y)
    {
        var randomY= Math.floor(Math.random(1-100));
        this.y = randomY;
    }
}//for image class

