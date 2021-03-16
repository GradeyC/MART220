class ShapeClass {

    constructor(Type, Hight, Width, Depth, Radius, RotateX, RotateY, RotateZ, TranslateX, TranslateY, TranslateZ) {
        this.Depth = Depth; this.Hight = Hight; this.Radius = Radius; this.RotateY = RotateY; this.TranslateX = TranslateX;
        this.Type = Type; this.Width = Width; this.RotateX = RotateX; this.RotateZ = RotateZ; this.TranslateY = TranslateY; this.TranslateZ = TranslateZ;
    }
}

function draw(frameCount) {
    push();
    TranslateZ(this.TranslateX, this.TranslateY, this.TranslateZ);

    rotateX(this.RotateX * frameCount);
    rotateY(this.RotateY * frameCount);
    rotateZ(this.RotateZ * frameCount);
    if (this.Type == "box") {
        box(this.Hight, this.Width, this.Depth);
        texture(Texture1);
    }
    else if (this.Type == "ellipsoid") {
        ellipsoid(this.Hight, this.Radius, this.Depth);
        texture(Texture2);
    }
    else if (this.Type == "cone") {
        cone(this.Radius, this.Hight, 7, 7, 3);
        texture(Texture3);
    }
    else if (this.Type == "sphere") {
        sphere(this.Radius, 7, 7);
        texture(Texture4);
    }
    else if (this.Type == "torus") {
        torus(this.Radius, this.Depth, 7, 14);
        texture(Texture5);
    }
    pop();
}