<x-layout title="imc">
    <main class="h-100 d-flex align-items-center justify-content-center" style="flex-grow: 1 !important;">
        <form method="POST">
            <h1>Cálculo de IMC</h1>
            <div class="form-group">
                <label for="iweight">Peso</label>
                <input type="number" step="0.01" class="form-control" id="iweight" placeholder="peso" name="weight" required>
            </div>
            <div class="form-group">
                <label for="iheight">Altura</label>
                <input type="number" step="0.01" class="form-control" id="iheight" placeholder="altura" name="height" required>
            </div>
            <button type="submit" class="btn btn-primary mt-3">Calcular</button>
        </form>
    </main>
</x-layout>
