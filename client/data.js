export default {
    grades: [
        {
            "id": "6",
            "subjects": [
                {
                    "name": "Chemistry",
                    "chapters": [
                        {
                            "name": "Acids Bases and Salts",
                            "apps": [
                                {
                                    "name": "pH Scale: Basics",
                                    "id": "ph-scale-basics",
                                    "type": "apps",
                                    "exec": "firefox --new-window file:///opt/phet/chemistry/ph-scale-basics_en.html",
                                    "subject": "chemistry",
                                    "keywords": ["", ""]
                                },
                                {
                                    "name": "Salts & Solubility",
                                    "id": "salts-solubility",
                                    "type": "apps",
                                    "exec": "java -jar /opt/phet/chemistry/soluble-salts_en.jar",
                                    "subject": "chemistry",
                                    "keywords": ["", ""]
                                },
                                {
                                    "name": "Acid - Base Solutions",
                                    "id": "acid-base-solutions",
                                    "type": "apps",
                                    "exec": "java -jar /opt/phet/chemistry/acid-base-solutions_en.jar",
                                    "subject": "chemistry",
                                    "keywords": ["", ""]
                                }

                            ]

                        }
                    ]
                }
            ]
        },
        {
            "id": "7"
        },
        {
            "id": "8"
        },
        {
            "id": "9"
        },
        {
            "id": "10"
        }
    ]

};