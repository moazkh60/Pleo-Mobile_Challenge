//
//  PhotoPickerController.swift
//  PleoExpensesList
//
//  Created by Muhammad Moaz Khan on 20/10/2019.
//  Copyright © 2019 Facebook. All rights reserved.
//

import UIKit

@objc(ImagePicker)
class ImagePicker: RCTEventEmitter {
  
  var imagePicker: UIImagePickerController!
  override func supportedEvents() -> [String]! {
    return ["imageSelected"]
  }
  @objc func selectImage() {
    DispatchQueue.main.async{
      self.imagePicker = UIImagePickerController()
      self.imagePicker.delegate = self
      self.imagePicker.sourceType = .photoLibrary
      UIApplication.shared.delegate?.window??
        .rootViewController?
        .present(self.imagePicker, animated: true, completion: nil)
    }
  }
}

extension ImagePicker : UIImagePickerControllerDelegate, UINavigationControllerDelegate {
    
    func imagePickerController(_ picker: UIImagePickerController, didFinishPickingMediaWithInfo info: [UIImagePickerController.InfoKey : Any]) {
        if let imgDir = info[.imageURL] as? URL {
          sendEvent(withName: "imageSelected", body: ["path": imgDir.absoluteString])
        }
        picker.dismiss(animated: true, completion: nil)
    }
}
