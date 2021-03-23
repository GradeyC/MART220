class Videos{
    constructor(Path,Xval,Yval,Hval,Wval){
        this.Path=Path;
        this.Xval=Xval;
        this.Yval=Yval;
        this.Hval=Hval;
        this.Wval=Wval;
    }
    setVideoOBJ(VideoOBJ){
        this.VideoOBJ=VideoOBJ;
    }
    setPath(Path){
        this.Path=Path;
    }
    setXval(Xval){
        this.Xval=Xval;
    }
    setYval(Yval){
        this.Yval=Yval;
    }
    setHval(Hval){
        this.Hval=Hval;
    }
    setWval(Wval){
        this.Wval=Wval;
    }

    getPath(){
        return this.Path;
    }
    getXval(){
        return this.Xval;
    }
    getYval(){
        return this.Yval;
    }
    getHval(){
        return this.Hval;
    }
    getWval(){
        return this.Wval;
    }
}