<?php

namespace App\Http\Controllers;

use App\Models\Nota;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class notaController extends Controller
{
    public function index() {
        $students = DB::table('notas')->get();
        return view("nota.index", ['students' => $students]);
    }

    public function create(Request $request) {

        $request->validate([
            'nome' => 'required|max:255',
            'nota' => 'required|numeric|min:0|max:10|regex:/^\d+(\.\d{1,2})?$/',
        ]);

        $nota = new Nota;
        $nota->nome = $request->nome;
        $nota->nota = $request->nota;
        $nota->save();

        session()->flash('success', 'Aluno criado com sucesso!');
        return redirect()->route('nota.index');
    }

    public function update(Request $request, $id) {
      $request->validate([
        'nome' => 'required|max:255',
        'nota' => 'required|numeric|min:0|max:10|regex:/^\d+(\.\d{1,2})?$/',
      ]);
      $student = Nota::find($id);
      $student->update($request->all());
      session()->flash('success', 'Aluno atualizado com sucesso!');
      return redirect()->route('nota.index');
    }

    public function delete($id) {
        $student = Nota::find($id);
        $student->delete();
        session()->flash('success', 'Aluno excluído com sucesso!');
        return redirect()->route('nota.index');
    }
}
