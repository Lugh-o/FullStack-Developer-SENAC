<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Nota</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="{{asset("css/app.css")}}">
</head>
<body>
    <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
      <a href="/imc" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
        <span class="fs-4">Simple header</span>
      </a>

      <ul class="nav nav-pills">
        <li class="nav-item"><a href="#" class="nav-link active" aria-current="page">Home</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Features</a></li>
        <li class="nav-item"><a href="#" class="nav-link">Pricing</a></li>
        <li class="nav-item"><a href="#" class="nav-link">FAQs</a></li>
        <li class="nav-item"><a href="#" class="nav-link">About</a></li>
      </ul>
    </header>

    @if (session('success'))
        <div class="alert alert-success alert-dismissible fade show" role="alert">
            {{ session('success') }}
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    @endif

    @if ($errors->any())
        <div class="alert alert-danger alert-dismissible fade show" role="alert">
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
        </div>
    @endif

    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#icreateModal">
        <i class="bi bi-plus"></i> Adicionar
    </button>

    <div class="modal fade" id="icreateModal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="icreateModalLabel">Criar novo Aluno</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form action="{{ route('nota.create') }}" method="post">
                        @csrf
                        <div class="form-group">
                            <label for="nome">Nome</label>
                            <input type="text" class="form-control" id="nome" placeholder="Nome" name="nome">
                        </div>
                        <div class="form-group mb-3">
                            <label for="nota">Nota</label>
                            <input type="number" step="0.01" class="form-control" id="nota" placeholder="Nota" name="nota">
                        </div>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                        <button type="submit" class="btn btn-primary">Criar Nova Entrada</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <div class="modal fade" id="iupdateModal" tabindex="-1">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="iupdateModalLabel">Atualizar Aluno</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form id="updateForm" method="post">
                        @csrf
                        @method('PUT')
                        <div class="form-group">
                            <label for="updateNome">Nome</label>
                            <input type="text" class="form-control" id="updateNome" placeholder="Nome" name="nome">
                        </div>
                        <div class="form-group mb-3">
                            <label for="updateNota">Nota</label>
                            <input type="number" step="0.01" class="form-control" id="updateNota" placeholder="Nota" name="nota">
                        </div>
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                        <button type="submit" class="btn btn-primary">Atualizar</button>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <table class="table">
        <thead>
            <tr>
            <th scope="col">Id</th>
            <th scope="col">Nome</th>
            <th scope="col">Nota</th>
            <th scope="col">Ações</th>
            </tr>
        </thead>
        <tbody>
            @foreach ($students as $key => $data)
                <tr>
                <th scope="row">{{$data->id}}</th>
                <td>{{$data->nome}}</td>
                <td>{{$data->nota}}</td>
                <td>
                    <form action="{{route('nota.delete', $data->id)}}" method="post">
                        @csrf
                        @method('DELETE')
                        <button type="submit"><i class="bi bi-trash-fill"></i>
                        </button>
                    </form>

                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#iupdateModal" data-id="{{$data->id}}" data-nome="{{$data->nome}}" data-nota="{{$data->nota}}">
                        <i class="bi bi-arrow-clockwise"></i>
                    </button>
                    
                </td>
                </tr>
            @endforeach

        </tbody>
    </table>

    <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p class="col-md-4 mb-0 text-muted">© 2022 Company, Inc</p>

        <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none">
        <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
        </a>

        <ul class="nav col-md-4 justify-content-end">
        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Home</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Features</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Pricing</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">FAQs</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">About</a></li>
        </ul>
    </footer>

    <script>
        document.addEventListener('DOMContentLoaded', function() {
            var updateModal = document.getElementById('iupdateModal');
            updateModal.addEventListener('show.bs.modal', function(event) {
                var button = event.relatedTarget;
                var id = button.getAttribute('data-id');
                var nome = button.getAttribute('data-nome');
                var nota = button.getAttribute('data-nota');

                var modalTitle = updateModal.querySelector('.modal-title');
                var nomeInput = updateModal.querySelector('#updateNome');
                var notaInput = updateModal.querySelector('#updateNota');
                var form = updateModal.querySelector('#updateForm');

                modalTitle.textContent = 'Atualizar aluno número ' + id;
                nomeInput.value = nome;
                notaInput.value = nota;
                form.action = '/nota/' + id;
            });
        });
    </script>
</body>
</html>
