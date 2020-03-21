function TaxiTransport()
{
    this.startNode;
    this.endNode;
    this.show = function()
    {
        if(this.startNode!= null && this.endNode!=null)
        {
            line(this.startNode.x,this.startNode.y,this.endNode.x, this.endNode.y);
        }
    }
}