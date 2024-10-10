<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
Use App\Models\Medico;
Use Log;


class MedicoController extends Controller
{
    public function getAll(){
        $data = Medico::get();
        return response()->json($data,200);
    }

    public function create(Request $request){
        $data['nombre'] = $request['nombre'];
        $data['APaterno'] = $request['APaterno'];
        $data['AMaterno'] = $request['AMaterno'];
        $data['Usuario'] = $request['Usuario'];
        $data['Password'] = $request['Password'];
        Medico::create($data);

        return response()->json([
            'message' => "Successfully created",
            'success' => true
        ],200);
    }

    public function delete($id_medico){
        $res = Medico::find($id_medico)->delete();
        return response()->json([
            'message' => "Successfully deleted",
            'success' => true
        ],200);
    }

    public function get($id_medico){
        $data = Medico::find($id_medico);
        return response()->json($data,200);
    }

    public function update(Request $request,$id_medico){
        $data['nombre'] = $request['nombre'];
        $data['APaterno'] = $request['APaterno'];
        $data['AMaterno'] = $request['AMaterno'];
        $data['Usuario'] = $request['Usuario'];
        $data['Password'] = $request['Password'];

        Medico::find($id_medico)->update($data);
        return response()->json([
            'message' => "Successfully updated",
            'success' => true
        ],200);
    }
}
