function RenderedChild() {
  console.log('RenderedChild RENDERED');
  return (
    <div>
      this will re render on any click <i>(to see the re render working open the developer tools, console tab)</i>;
    </div>
  );
}

export default RenderedChild;