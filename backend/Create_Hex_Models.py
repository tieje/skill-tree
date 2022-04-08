#!/usr/bin/env python3
'''
The purpose of this script is take an input of a JSON file,
convert the JSON of the form:

{
  "0,0,0": {
    "q": 0,
    "r": 0,
    "s": 0
  },

into models for the skilltree.models.py file of the form:

h_0_0_0: ForeignKey = ForeignKey(SkillTreeHexagons, null=True, on_delete=CASCADE)
'''
import json
from sys import argv
from typing import List, Tuple

print(argv[1])


class GetModels:
    def __init__(self, file_path):
        self.file_path = file_path

    def get_models_from_json(self):
        with open(self.file_path, 'r') as file:
            file_data: List[Tuple] = json.load(file)
            self.print_models(file_data)

    def print_models(self, models_obj: List[str]):
        for i in models_obj:
            new_i = '    h_' + i.replace('-', 'm').replace(',', '_') + \
                ": IntegerField = IntegerField(null=True, blank=True)"
            print(new_i)


GetModels(argv[1]).get_models_from_json()
