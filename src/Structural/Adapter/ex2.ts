class Ratchet {
  halfDrive(type: string /* male */){
    console.log("Ratchet:halfDrive");
  }
}

class Adapter implements Ratchet{
  constructor(private socket: Socket){

  }
  
  halfDrive(){
    
  }

  quorterDrive(){
    this.socket.quorterDrive();
  }
}

class Socket {
  quorterDrive(){
    console.log("Socket:quorterDrive");
  }
}