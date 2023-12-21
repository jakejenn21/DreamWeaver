const express = require("express");
const app = express();

app.get("/api", (req, res) => {
  res.json({
    dreams: [
      {
        title: "Dream 1",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tortor sem, laoreet ut felis finibus, sodales vestibulum nisi. Phasellus nec cursus felis. Ut sodales egestas velit ac rhoncus. Nunc et mattis orci. Nam sapien neque, imperdiet quis tempus vel, scelerisque ac nibh. Nullam ultricies iaculis mi, ac gravida metus ultricies ut. Donec mauris tortor, posuere ut finibus ut, volutpat ut lacus. Nulla ante sem, mattis quis laoreet eget, suscipit vel diam. Mauris vel nulla ac metus pellentesque rhoncus sed nec nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

    Proin accumsan vel lectus a eleifend. In hac habitasse platea dictumst. Nam volutpat arcu ac consectetur tincidunt. Nullam eu nulla vitae ipsum aliquam porta. Maecenas pulvinar lectus non vulputate auctor. In in justo metus. Curabitur porta, libero sit amet dictum rutrum, tortor lectus eleifend justo, in vulputate lorem ligula ac est. Quisque aliquet nulla sed posuere rhoncus. Nullam varius tempus velit, at convallis nisi malesuada a. Suspendisse lobortis auctor tincidunt.
    
    Mauris vitae sagittis orci. Pellentesque rutrum pretium felis id dapibus. Quisque aliquam posuere fringilla. Pellentesque efficitur molestie odio, eu vehicula lectus posuere hendrerit. Ut sit amet lacus quis est rhoncus lobortis vitae at dui. Integer urna odio, lobortis non vehicula id, mollis eu ante. Duis eu aliquet diam. Pellentesque nisl est, elementum eget tristique vel, luctus vitae dolor. Fusce lobortis erat a purus suscipit rutrum. Aenean fringilla nisi risus, venenatis rutrum elit imperdiet vel. Sed interdum congue odio, eget condimentum metus vulputate interdum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
    
    Nunc ut velit vel enim tincidunt venenatis. Etiam lectus eros, dignissim at ex finibus, vestibulum pulvinar elit. Etiam ut pellentesque felis, faucibus maximus dui. Fusce odio sapien, pretium cursus consequat eget, maximus sit amet nisl. Sed commodo diam ut urna tincidunt cursus. In nec erat faucibus, convallis leo a, euismod tellus. In non massa non nulla maximus convallis. Maecenas mollis iaculis tellus a consequat. Donec ultricies orci sem, id pellentesque nisl porta nec. Suspendisse semper, tellus at hendrerit venenatis, arcu velit viverra lorem, in ullamcorper justo ipsum at enim. Quisque et nisi a felis laoreet facilisis ac sed justo. Vestibulum et dolor pulvinar mauris ultricies mollis. Etiam sit amet nibh maximus, egestas ipsum id, vehicula sapien. Donec finibus lobortis ornare. Fusce vitae augue eros.
    
    Nunc sed massa risus. Aenean dictum convallis purus cursus porta. Nulla facilisi. Sed rutrum risus a nunc finibus fermentum. Nullam fringilla urna condimentum rutrum ullamcorper. Mauris nec gravida libero. Nullam id sodales nunc. Cras quam arcu, aliquam vel dui ac, viverra porta massa. Maecenas vel urna ac sem sagittis efficitur. Proin ornare nisl id massa cursus, ac sollicitudin erat tempor. Aliquam erat volutpat. Quisque pretium at libero sit amet placerat.`,
      },
      {
        title: "Dream 2",
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas tortor sem, laoreet ut felis finibus, sodales vestibulum nisi. Phasellus nec cursus felis. Ut sodales egestas velit ac rhoncus. Nunc et mattis orci. Nam sapien neque, imperdiet quis tempus vel, scelerisque ac nibh. Nullam ultricies iaculis mi, ac gravida metus ultricies ut. Donec mauris tortor, posuere ut finibus ut, volutpat ut lacus. Nulla ante sem, mattis quis laoreet eget, suscipit vel diam. Mauris vel nulla ac metus pellentesque rhoncus sed nec nunc. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.

    Proin accumsan vel lectus a eleifend. In hac habitasse platea dictumst. Nam volutpat arcu ac consectetur tincidunt. Nullam eu nulla vitae ipsum aliquam porta. Maecenas pulvinar lectus non vulputate auctor. In in justo metus. Curabitur porta, libero sit amet dictum rutrum, tortor lectus eleifend justo, in vulputate lorem ligula ac est. Quisque aliquet nulla sed posuere rhoncus. Nullam varius tempus velit, at convallis nisi malesuada a. Suspendisse lobortis auctor tincidunt.
    
    Mauris vitae sagittis orci. Pellentesque rutrum pretium felis id dapibus. Quisque aliquam posuere fringilla. Pellentesque efficitur molestie odio, eu vehicula lectus posuere hendrerit. Ut sit amet lacus quis est rhoncus lobortis vitae at dui. Integer urna odio, lobortis non vehicula id, mollis eu ante. Duis eu aliquet diam. Pellentesque nisl est, elementum eget tristique vel, luctus vitae dolor. Fusce lobortis erat a purus suscipit rutrum. Aenean fringilla nisi risus, venenatis rutrum elit imperdiet vel. Sed interdum congue odio, eget condimentum metus vulputate interdum. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
    
    Nunc ut velit vel enim tincidunt venenatis. Etiam lectus eros, dignissim at ex finibus, vestibulum pulvinar elit. Etiam ut pellentesque felis, faucibus maximus dui. Fusce odio sapien, pretium cursus consequat eget, maximus sit amet nisl. Sed commodo diam ut urna tincidunt cursus. In nec erat faucibus, convallis leo a, euismod tellus. In non massa non nulla maximus convallis. Maecenas mollis iaculis tellus a consequat. Donec ultricies orci sem, id pellentesque nisl porta nec. Suspendisse semper, tellus at hendrerit venenatis, arcu velit viverra lorem, in ullamcorper justo ipsum at enim. Quisque et nisi a felis laoreet facilisis ac sed justo. Vestibulum et dolor pulvinar mauris ultricies mollis. Etiam sit amet nibh maximus, egestas ipsum id, vehicula sapien. Donec finibus lobortis ornare. Fusce vitae augue eros.
    
    Nunc sed massa risus. Aenean dictum convallis purus cursus porta. Nulla facilisi. Sed rutrum risus a nunc finibus fermentum. Nullam fringilla urna condimentum rutrum ullamcorper. Mauris nec gravida libero. Nullam id sodales nunc. Cras quam arcu, aliquam vel dui ac, viverra porta massa. Maecenas vel urna ac sem sagittis efficitur. Proin ornare nisl id massa cursus, ac sollicitudin erat tempor. Aliquam erat volutpat. Quisque pretium at libero sit amet placerat.`,
      },
    ],
  });
});

app.listen(4700, () => {
  console.log("Server started on port 4700");
});
