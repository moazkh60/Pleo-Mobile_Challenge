//
//  PhotoPickerController.swift
//  PleoExpensesList
//
//  Created by Muhammad Moaz Khan on 20/10/2019.
//  Copyright © 2019 Facebook. All rights reserved.
//

import UIKit

@objc(ImagePicker)
class ImagePicker: NSObject {
  
  var imagePicker: UIImagePickerController!
  var imgDir : URL?

}

extension ImagePicker : UIImagePickerControllerDelegate, UINavigationControllerDelegate {
    
    func imagePickerController(_ picker: UIImagePickerController, didFinishPickingMediaWithInfo info: [UIImagePickerController.InfoKey : Any]) {
        let image = info[.originalImage] as! UIImage
        if let imgDir = info[.imageURL] as? URL {
          self.imgDir = imgDir
        }
        picker.dismiss(animated: true, completion: nil)
    }
}
