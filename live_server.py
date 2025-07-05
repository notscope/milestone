from livereload import Server

server = Server()
server.watch('index.html', delay=0)
server.watch('style.css', delay=0)
server.watch('script.js', delay=0)
server.serve(root='.', port=8000, host='0.0.0.0')